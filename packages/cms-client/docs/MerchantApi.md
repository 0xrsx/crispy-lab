# MerchantApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**merchantControllerCreate**](MerchantApi.md#merchantcontrollercreate) | **POST** /merchant |  |
| [**merchantControllerFindAll**](MerchantApi.md#merchantcontrollerfindall) | **GET** /merchant |  |
| [**merchantControllerFindOne**](MerchantApi.md#merchantcontrollerfindone) | **GET** /merchant/{id} |  |
| [**merchantControllerRemove**](MerchantApi.md#merchantcontrollerremove) | **DELETE** /merchant/{id} |  |
| [**merchantControllerUpdate**](MerchantApi.md#merchantcontrollerupdate) | **PATCH** /merchant/{id} |  |



## merchantControllerCreate

> merchantControllerCreate(body)



### Example

```ts
import {
  Configuration,
  MerchantApi,
} from '@crispy-lab/cms-client';
import type { MerchantControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MerchantApi();

  const body = {
    // object
    body: Object,
  } satisfies MerchantControllerCreateRequest;

  try {
    const data = await api.merchantControllerCreate(body);
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


## merchantControllerFindAll

> merchantControllerFindAll()



### Example

```ts
import {
  Configuration,
  MerchantApi,
} from '@crispy-lab/cms-client';
import type { MerchantControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MerchantApi();

  try {
    const data = await api.merchantControllerFindAll();
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


## merchantControllerFindOne

> merchantControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  MerchantApi,
} from '@crispy-lab/cms-client';
import type { MerchantControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MerchantApi();

  const body = {
    // string
    id: id_example,
  } satisfies MerchantControllerFindOneRequest;

  try {
    const data = await api.merchantControllerFindOne(body);
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


## merchantControllerRemove

> merchantControllerRemove(id)



### Example

```ts
import {
  Configuration,
  MerchantApi,
} from '@crispy-lab/cms-client';
import type { MerchantControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MerchantApi();

  const body = {
    // string
    id: id_example,
  } satisfies MerchantControllerRemoveRequest;

  try {
    const data = await api.merchantControllerRemove(body);
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


## merchantControllerUpdate

> merchantControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  MerchantApi,
} from '@crispy-lab/cms-client';
import type { MerchantControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MerchantApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies MerchantControllerUpdateRequest;

  try {
    const data = await api.merchantControllerUpdate(body);
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

