---
date: 2021-02-07
tag:
  - Python
  - design patterns
  - testing
author: Piotr Przetacznik
sidebar: auto
location: Kraków
---

# Gateway Pattern

During development of large projects with multiple frameworks and dependencies, it's very important to distinguish domain code from code that depends on external code.

My personal recommendation would be to encapsulate almost every external library that can be potentially replaced (eg. with [*Strategy pattern*. wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern)), its interface isn't well designed or simply we would like to mock. I would like to show how `Gateway Pattern` ([Martin Fowler. *Gateway*](https://martinfowler.com/eaaCatalog/gateway.html)) can be used for encapsulating on the example of `requests` library.

## Describing the problem

Let's consider following service class consuming external REST API.
```Python
from dataclasses import dataclass
from typing import Dict
import json
import requests

@dataclass
class KVService:
    hostname: str

    def _get(self, endpoint) -> Dict:
        response = requests.get(f"https://{self.hostname}/{endpoint}")
        return response.json()

    def get_metadata(self) -> Dict:
        return self._get("metadata")

    def get_kv(self, key: str) -> Dict:
        return self._get(f"kv/{key}")
```

What if we would like to test our two public methods `get_metadata(...)` and `get_kv(...)` as they provide some minimal business logic? We would need to set up our KVService first at `https://{hostname}` address and mock `requests.get(...)` method. What if there are more classes like that in our codebase and were using `requests` library in multiple places?

There's a great way to mock http servers in Python described in [*Testing External APIs With Mock Servers*. Real Python](https://realpython.com/testing-third-party-apis-with-mock-servers/#testing-the-mock-api), but do we want to repeat that code for every client-side stub we create? What if we would like to switch to other requests library in the future if there we'll be a better one?

In real world it may also happen that you'll be out of your ideas how to mock external library for now and you would rather take a loan on technical debt account and test only the code that is in your control.

## Encapsulating external dependencies

The simple solution that suits very well in OOP and DDD world is to create a `gateway` class that embedds usage of the external library. In my case, it would simply be a class that have a very simple interface, ie. `get(endpoint: str)` method.
```Python
from dataclasses import dataclass
from typing import Dict
import json
import requests

@dataclass
class Server:
    hostname: str

    def get(self, endpoint: str) -> Dict:
        response = requests.get(f"https://{self.hostname}/{endpoint}")
        return response.json()
```

Now, our `KVService` class in a separate file will look like this.
```Python
from dataclasses import dataclass
from typing import Dict
from my_package import Server

@dataclass
class KVService:
    server: Server

    def get_metadata(self) -> Dict:
        return self.server.get("metadata")

    def get_kv(self, key: str) -> Dict:
        return self.server.get(f"kv/{key}")
```
Our class `KVService` doesn't have a dependency on `requests` nor a presence of `https://{hostname}` REST service anymore.

## Testing

Let's see how easily we can test the logic of `KVService` class now.
```Python
from pytest import fixture
from my_package import Server

@fixture
def server():
    server = Server(hostname="")
    server.get = lambda key: key
    return server

def test_kv_service(server):
    kv_service = KVService(server)
    assert kv_service.get_kv("aaa") == "kv/aaa"
    assert kv_service.get_metadata() == "metadata"
```

There are at least few definitions of unit and integrations tests, eg. [Ham Vocke. *The Practical Test Pyramid*. 2018](https://martinfowler.com/articles/practical-test-pyramid.html). I'm not a huge fan of unit tests in classic definition where we mock all dependencies of a given class. In reality it creates a lot of boilerplate code that bind us to a given implementation ([Andrzej Krzywda. *Unit tests vs class tests*. 2014.](https://blog.arkency.com/2014/09/unit-tests-vs-class-tests/)). Instead, I rather try to design and test my code by domain units usually composed of multiple classes with well designed public interfaces. In that case, if we use gateway pattern to keep external dependencies out of our domain code, it will be much easier to create unit or integration tests for testing our domain code.

## Summary

I hope that above example shows that encapsulating external dependencies using additional class makes our codebase less dependent on external code and makes it easier to test. If we design interface of our gateway classes properly, we'll be able to replace external libraries very easily and keep our domain codebase with its unit/integration tests untouched.

## References

* [*Strategy pattern*. wikipedia](https://en.wikipedia.org/wiki/Strategy_pattern),
* [Fowler, Martin. *Gateway*](https://martinfowler.com/eaaCatalog/gateway.html),
* Fowler, Martin. *Patterns of Enterprise Application Architecture*. 2002,
* [*Testing External APIs With Mock Servers*. Real Python](https://realpython.com/testing-third-party-apis-with-mock-servers/#testing-the-mock-api),
* [Vocke, Ham. *The Practical Test Pyramid*. 2018](https://martinfowler.com/articles/practical-test-pyramid.html),
* [Krzywda, Andrzej. *Unit tests vs class tests*. 2014](https://blog.arkency.com/2014/09/unit-tests-vs-class-tests/).

*Article originally written 2021.02.07*
