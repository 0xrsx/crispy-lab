# ProductApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**productControllerCreate**](ProductApi.md#productcontrollercreate) | **POST** /product |  |
| [**productControllerFindAll**](ProductApi.md#productcontrollerfindall) | **GET** /product |  |
| [**productControllerFindOne**](ProductApi.md#productcontrollerfindone) | **GET** /product/{id} |  |
| [**productControllerRemove**](ProductApi.md#productcontrollerremove) | **DELETE** /product/{id} |  |
| [**productControllerUpdate**](ProductApi.md#productcontrollerupdate) | **PATCH** /product/{id} |  |



## productControllerCreate

> productControllerCreate(body)



### Example

```ts
import {
  Configuration,
  ProductApi,
} from '@crispy-lab/cms-client';
import type { ProductControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new ProductApi();

  const body = {
    // object
    body: Object,
  } satisfies ProductControllerCreateRequest;

  try {
    const data = await api.productControllerCreate(body);
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


## productControllerFindAll

> productControllerFindAll()



### Example

```ts
import {
  Configuration,
  ProductApi,
} from '@crispy-lab/cms-client';
import type { ProductControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new ProductApi();

  try {
    const data = await api.productControllerFindAll();
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


## productControllerFindOne

> productControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  ProductApi,
} from '@crispy-lab/cms-client';
import type { ProductControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new ProductApi();

  const body = {
    // string
    id: id_example,
  } satisfies ProductControllerFindOneRequest;

  try {
    const data = await api.productControllerFindOne(body);
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


## productControllerRemove

> productControllerRemove(id)



### Example

```ts
import {
  Configuration,
  ProductApi,
} from '@crispy-lab/cms-client';
import type { ProductControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new ProductApi();

  const body = {
    // string
    id: id_example,
  } satisfies ProductControllerRemoveRequest;

  try {
    const data = await api.productControllerRemove(body);
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


## productControllerUpdate

> productControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  ProductApi,
} from '@crispy-lab/cms-client';
import type { ProductControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new ProductApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies ProductControllerUpdateRequest;

  try {
    const data = await api.productControllerUpdate(body);
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

