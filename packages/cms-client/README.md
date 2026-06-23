# @crispy-lab/cms-client@1.0.0

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @crispy-lab/cms-client --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AccountApi* | [**accountControllerCreate**](docs/AccountApi.md#accountcontrollercreate) | **POST** /account | 
*AccountApi* | [**accountControllerFindAll**](docs/AccountApi.md#accountcontrollerfindall) | **GET** /account | 
*AccountApi* | [**accountControllerFindOne**](docs/AccountApi.md#accountcontrollerfindone) | **GET** /account/{id} | 
*AccountApi* | [**accountControllerRemove**](docs/AccountApi.md#accountcontrollerremove) | **DELETE** /account/{id} | 
*AccountApi* | [**accountControllerUpdate**](docs/AccountApi.md#accountcontrollerupdate) | **PATCH** /account/{id} | 
*AppApi* | [**appControllerGetRandomName**](docs/AppApi.md#appcontrollergetrandomname) | **GET** / | 
*BranchApi* | [**branchControllerCreate**](docs/BranchApi.md#branchcontrollercreate) | **POST** /branch | 
*BranchApi* | [**branchControllerFindAll**](docs/BranchApi.md#branchcontrollerfindall) | **GET** /branch | 
*BranchApi* | [**branchControllerFindOne**](docs/BranchApi.md#branchcontrollerfindone) | **GET** /branch/{id} | 
*BranchApi* | [**branchControllerRemove**](docs/BranchApi.md#branchcontrollerremove) | **DELETE** /branch/{id} | 
*BranchApi* | [**branchControllerUpdate**](docs/BranchApi.md#branchcontrollerupdate) | **PATCH** /branch/{id} | 
*MenuApi* | [**menuControllerCreate**](docs/MenuApi.md#menucontrollercreate) | **POST** /menu | 
*MenuApi* | [**menuControllerFindAll**](docs/MenuApi.md#menucontrollerfindall) | **GET** /menu | 
*MenuApi* | [**menuControllerFindOne**](docs/MenuApi.md#menucontrollerfindone) | **GET** /menu/{id} | 
*MenuApi* | [**menuControllerRemove**](docs/MenuApi.md#menucontrollerremove) | **DELETE** /menu/{id} | 
*MenuApi* | [**menuControllerUpdate**](docs/MenuApi.md#menucontrollerupdate) | **PATCH** /menu/{id} | 
*MerchantApi* | [**merchantControllerCreate**](docs/MerchantApi.md#merchantcontrollercreate) | **POST** /merchant | 
*MerchantApi* | [**merchantControllerFindAll**](docs/MerchantApi.md#merchantcontrollerfindall) | **GET** /merchant | 
*MerchantApi* | [**merchantControllerFindOne**](docs/MerchantApi.md#merchantcontrollerfindone) | **GET** /merchant/{id} | 
*MerchantApi* | [**merchantControllerRemove**](docs/MerchantApi.md#merchantcontrollerremove) | **DELETE** /merchant/{id} | 
*MerchantApi* | [**merchantControllerUpdate**](docs/MerchantApi.md#merchantcontrollerupdate) | **PATCH** /merchant/{id} | 
*OrderApi* | [**orderControllerCreate**](docs/OrderApi.md#ordercontrollercreate) | **POST** /order | 
*OrderApi* | [**orderControllerFindAll**](docs/OrderApi.md#ordercontrollerfindall) | **GET** /order | 
*OrderApi* | [**orderControllerFindOne**](docs/OrderApi.md#ordercontrollerfindone) | **GET** /order/{id} | 
*OrderApi* | [**orderControllerRemove**](docs/OrderApi.md#ordercontrollerremove) | **DELETE** /order/{id} | 
*OrderApi* | [**orderControllerUpdate**](docs/OrderApi.md#ordercontrollerupdate) | **PATCH** /order/{id} | 
*ProductApi* | [**productControllerCreate**](docs/ProductApi.md#productcontrollercreate) | **POST** /product | 
*ProductApi* | [**productControllerFindAll**](docs/ProductApi.md#productcontrollerfindall) | **GET** /product | 
*ProductApi* | [**productControllerFindOne**](docs/ProductApi.md#productcontrollerfindone) | **GET** /product/{id} | 
*ProductApi* | [**productControllerRemove**](docs/ProductApi.md#productcontrollerremove) | **DELETE** /product/{id} | 
*ProductApi* | [**productControllerUpdate**](docs/ProductApi.md#productcontrollerupdate) | **PATCH** /product/{id} | 
*TagApi* | [**tagControllerCreate**](docs/TagApi.md#tagcontrollercreate) | **POST** /tag | 
*TagApi* | [**tagControllerFindAll**](docs/TagApi.md#tagcontrollerfindall) | **GET** /tag | 
*TagApi* | [**tagControllerFindOne**](docs/TagApi.md#tagcontrollerfindone) | **GET** /tag/{id} | 
*TagApi* | [**tagControllerRemove**](docs/TagApi.md#tagcontrollerremove) | **DELETE** /tag/{id} | 
*TagApi* | [**tagControllerUpdate**](docs/TagApi.md#tagcontrollerupdate) | **PATCH** /tag/{id} | 


### Models

- [Ex1](docs/Ex1.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `1.0`
- Package version: `1.0.0`
- Generator version: `7.24.0-SNAPSHOT`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
