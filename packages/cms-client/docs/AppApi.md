# AppApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**appControllerGetRandomName**](AppApi.md#appcontrollergetrandomname) | **GET** / |  |



## appControllerGetRandomName

> Ex1 appControllerGetRandomName()



### Example

```ts
import {
  Configuration,
  AppApi,
} from '@crispy-lab/cms-client';
import type { AppControllerGetRandomNameRequest } from '@crispy-lab/cms-client';

async function example() {
  console.log("🚀 Testing @crispy-lab/cms-client SDK...");
  const api = new AppApi();

  try {
    const data = await api.appControllerGetRandomName();
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

[**Ex1**](Ex1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

