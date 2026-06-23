# MenuApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**menuControllerCreate**](MenuApi.md#menucontrollercreate) | **POST** /menu |  |
| [**menuControllerFindAll**](MenuApi.md#menucontrollerfindall) | **GET** /menu |  |
| [**menuControllerFindOne**](MenuApi.md#menucontrollerfindone) | **GET** /menu/{id} |  |
| [**menuControllerRemove**](MenuApi.md#menucontrollerremove) | **DELETE** /menu/{id} |  |
| [**menuControllerUpdate**](MenuApi.md#menucontrollerupdate) | **PATCH** /menu/{id} |  |



## menuControllerCreate

> menuControllerCreate(body)



### Example

```ts
import {
  Configuration,
  MenuApi,
} from '@crispy-lab/cms-client';
import type { MenuControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MenuApi();

  const body = {
    // object
    body: Object,
  } satisfies MenuControllerCreateRequest;

  try {
    const data = await api.menuControllerCreate(body);
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


## menuControllerFindAll

> menuControllerFindAll()



### Example

```ts
import {
  Configuration,
  MenuApi,
} from '@crispy-lab/cms-client';
import type { MenuControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MenuApi();

  try {
    const data = await api.menuControllerFindAll();
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


## menuControllerFindOne

> menuControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  MenuApi,
} from '@crispy-lab/cms-client';
import type { MenuControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MenuApi();

  const body = {
    // string
    id: id_example,
  } satisfies MenuControllerFindOneRequest;

  try {
    const data = await api.menuControllerFindOne(body);
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


## menuControllerRemove

> menuControllerRemove(id)



### Example

```ts
import {
  Configuration,
  MenuApi,
} from '@crispy-lab/cms-client';
import type { MenuControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MenuApi();

  const body = {
    // string
    id: id_example,
  } satisfies MenuControllerRemoveRequest;

  try {
    const data = await api.menuControllerRemove(body);
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


## menuControllerUpdate

> menuControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  MenuApi,
} from '@crispy-lab/cms-client';
import type { MenuControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new MenuApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies MenuControllerUpdateRequest;

  try {
    const data = await api.menuControllerUpdate(body);
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

