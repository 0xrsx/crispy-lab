# BranchApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**branchControllerCreate**](BranchApi.md#branchcontrollercreate) | **POST** /branch |  |
| [**branchControllerFindAll**](BranchApi.md#branchcontrollerfindall) | **GET** /branch |  |
| [**branchControllerFindOne**](BranchApi.md#branchcontrollerfindone) | **GET** /branch/{id} |  |
| [**branchControllerRemove**](BranchApi.md#branchcontrollerremove) | **DELETE** /branch/{id} |  |
| [**branchControllerUpdate**](BranchApi.md#branchcontrollerupdate) | **PATCH** /branch/{id} |  |



## branchControllerCreate

> branchControllerCreate(body)



### Example

```ts
import {
  Configuration,
  BranchApi,
} from '@crispy-lab/cms-client';
import type { BranchControllerCreateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new BranchApi();

  const body = {
    // object
    body: Object,
  } satisfies BranchControllerCreateRequest;

  try {
    const data = await api.branchControllerCreate(body);
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


## branchControllerFindAll

> branchControllerFindAll()



### Example

```ts
import {
  Configuration,
  BranchApi,
} from '@crispy-lab/cms-client';
import type { BranchControllerFindAllRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new BranchApi();

  try {
    const data = await api.branchControllerFindAll();
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


## branchControllerFindOne

> branchControllerFindOne(id)



### Example

```ts
import {
  Configuration,
  BranchApi,
} from '@crispy-lab/cms-client';
import type { BranchControllerFindOneRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new BranchApi();

  const body = {
    // string
    id: id_example,
  } satisfies BranchControllerFindOneRequest;

  try {
    const data = await api.branchControllerFindOne(body);
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


## branchControllerRemove

> branchControllerRemove(id)



### Example

```ts
import {
  Configuration,
  BranchApi,
} from '@crispy-lab/cms-client';
import type { BranchControllerRemoveRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new BranchApi();

  const body = {
    // string
    id: id_example,
  } satisfies BranchControllerRemoveRequest;

  try {
    const data = await api.branchControllerRemove(body);
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


## branchControllerUpdate

> branchControllerUpdate(id, body)



### Example

```ts
import {
  Configuration,
  BranchApi,
} from '@crispy-lab/cms-client';
import type { BranchControllerUpdateRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new BranchApi();

  const body = {
    // string
    id: id_example,
    // object
    body: Object,
  } satisfies BranchControllerUpdateRequest;

  try {
    const data = await api.branchControllerUpdate(body);
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

