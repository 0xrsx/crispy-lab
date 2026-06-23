# OrderApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**orderControllerCreate**](OrderApi.md#ordercontrollercreate) | **POST** /order |  |
| [**orderControllerFindAll**](OrderApi.md#ordercontrollerfindall) | **GET** /order |  |
| [**orderControllerFindOne**](OrderApi.md#ordercontrollerfindone) | **GET** /order/{id} |  |
| [**orderControllerRemove**](OrderApi.md#ordercontrollerremove) | **DELETE** /order/{id} |  |
| [**orderControllerUpdate**](OrderApi.md#ordercontrollerupdate) | **PATCH** /order/{id} |  |



## orderControllerCreate

> orderControllerCreate(body)



### Example

```ts
import {
  Configuration,
  OrderApi,
} from '@crispy-lab/cms-client';
import type { OrderControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new OrderApi();

  const body = {
    // object
    body: Object,
  } satisfies OrderControllerCreateRequest;

  try {
    const data = await api.orderControllerCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## orderControllerFindAll

> orderControllerFindAll()



### Example

```ts
import {
  Configuration,
  OrderApi,
} from '@crispy-lab/cms-client';
import type { OrderControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new OrderApi();

  try {
    const data = await api.orderControllerFindAll();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## orderControllerFindOne

> orderControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  OrderApi,
} from '@crispy-lab/cms-client';
import type { OrderControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new OrderApi();

  const body = {
    // string
    id: id_example,
  } satisfies OrderControllerFindOneRequest;

  try {
    const data = await api.orderControllerFindOne(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## orderControllerRemove

> orderControllerRemove(id)



### Example

```ts
import {
  Configuration,
  OrderApi,
} from '@crispy-lab/cms-client';
import type { OrderControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new OrderApi();

  const body = {
    // string
    id: id_example,
  } satisfies OrderControllerRemoveRequest;

  try {
    const data = await api.orderControllerRemove(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## orderControllerUpdate

> orderControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  OrderApi,
} from '@crispy-lab/cms-client';
import type { OrderControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new OrderApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies OrderControllerUpdateRequest;

  try {
    const data = await api.orderControllerUpdate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **body** | `object` |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

