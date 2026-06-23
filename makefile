### CMS Backend

CMS_CODEGEN_DIR=apps/cms-backend/codegen
CMS_CODEGEN_OUTPUT_DIR=packages/cms-client

generate-cms-swagger:
	npx ts-node ./${CMS_CODEGEN_DIR}/generate-swagger.ts

# using Docker
generate-cms-client:	generate-cms-swagger;
	rm -rf ./${CMS_CODEGEN_OUTPUT_DIR};
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
	-g typescript-fetch \
	-i /local/${CMS_CODEGEN_DIR}/openapi.yaml \
	-o /local/${CMS_CODEGEN_OUTPUT_DIR} \
	-c /local/${CMS_CODEGEN_DIR}/config.json;

# using npm package
generate-cms-client-npm:	generate-cms-swagger;
	rm -rf ./${CMS_CODEGEN_OUTPUT_DIR};
	npx @openapitools/openapi-generator-cli generate \
	-i ./${CMS_CODEGEN_DIR}/openapi.yaml \
	-g typescript-fetch \
	-o ./${CMS_CODEGEN_OUTPUT_DIR};





	


