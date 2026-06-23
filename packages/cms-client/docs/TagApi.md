# TagApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**tagControllerCreate**](TagApi.md#tagcontrollercreate) | **POST** /tag |  |
| [**tagControllerFindAll**](TagApi.md#tagcontrollerfindall) | **GET** /tag |  |
| [**tagControllerFindOne**](TagApi.md#tagcontrollerfindone) | **GET** /tag/{id} |  |
| [**tagControllerRemove**](TagApi.md#tagcontrollerremove) | **DELETE** /tag/{id} |  |
| [**tagControllerUpdate**](TagApi.md#tagcontrollerupdate) | **PATCH** /tag/{id} |  |



## tagControllerCreate

> tagControllerCreate(body)



### Example

```ts
import {
  Configuration,
  TagApi,
} from '@crispy-lab/cms-client';
import type { TagControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new TagApi();

  const body = {
    // object
    body: Object,
  } satisfies TagControllerCreateRequest;

  try {
    const data = await api.tagControllerCreate(body);
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


## tagControllerFindAll

> tagControllerFindAll()



### Example

```ts
import {
  Configuration,
  TagApi,
} from '@crispy-lab/cms-client';
import type { TagControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new TagApi();

  try {
    const data = await api.tagControllerFindAll();
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


## tagControllerFindOne

> tagControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  TagApi,
} from '@crispy-lab/cms-client';
import type { TagControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new TagApi();

  const body = {
    // string
    id: id_example,
  } satisfies TagControllerFindOneRequest;

  try {
    const data = await api.tagControllerFindOne(body);
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


## tagControllerRemove

> tagControllerRemove(id)



### Example

```ts
import {
  Configuration,
  TagApi,
} from '@crispy-lab/cms-client';
import type { TagControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new TagApi();

  const body = {
    // string
    id: id_example,
  } satisfies TagControllerRemoveRequest;

  try {
    const data = await api.tagControllerRemove(body);
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


## tagControllerUpdate

> tagControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  TagApi,
} from '@crispy-lab/cms-client';
import type { TagControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new TagApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies TagControllerUpdateRequest;

  try {
    const data = await api.tagControllerUpdate(body);
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

