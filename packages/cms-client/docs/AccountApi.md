# AccountApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**accountControllerCreate**](AccountApi.md#accountcontrollercreate) | **POST** /account |  |
| [**accountControllerFindAll**](AccountApi.md#accountcontrollerfindall) | **GET** /account |  |
| [**accountControllerFindOne**](AccountApi.md#accountcontrollerfindone) | **GET** /account/{id} |  |
| [**accountControllerRemove**](AccountApi.md#accountcontrollerremove) | **DELETE** /account/{id} |  |
| [**accountControllerUpdate**](AccountApi.md#accountcontrollerupdate) | **PATCH** /account/{id} |  |



## accountControllerCreate

> accountControllerCreate(body)



### Example

```ts
import {
  Configuration,
  AccountApi,
} from '@crispy-lab/cms-client';
import type { AccountControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AccountApi();

  const body = {
    // object
    body: Object,
  } satisfies AccountControllerCreateRequest;

  try {
    const data = await api.accountControllerCreate(body);
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


## accountControllerFindAll

> accountControllerFindAll()



### Example

```ts
import {
  Configuration,
  AccountApi,
} from '@crispy-lab/cms-client';
import type { AccountControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AccountApi();

  try {
    const data = await api.accountControllerFindAll();
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


## accountControllerFindOne

> accountControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  AccountApi,
} from '@crispy-lab/cms-client';
import type { AccountControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AccountApi();

  const body = {
    // string
    id: id_example,
  } satisfies AccountControllerFindOneRequest;

  try {
    const data = await api.accountControllerFindOne(body);
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


## accountControllerRemove

> accountControllerRemove(id)



### Example

```ts
import {
  Configuration,
  AccountApi,
} from '@crispy-lab/cms-client';
import type { AccountControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AccountApi();

  const body = {
    // string
    id: id_example,
  } satisfies AccountControllerRemoveRequest;

  try {
    const data = await api.accountControllerRemove(body);
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


## accountControllerUpdate

> accountControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  AccountApi,
} from '@crispy-lab/cms-client';
import type { AccountControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AccountApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies AccountControllerUpdateRequest;

  try {
    const data = await api.accountControllerUpdate(body);
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

