import type { AxiosHttpResult, BucketDomain, CreateBucketArguments, DeleteBucketArguments, ListObjectsArguments, ObjectListingDomain, ListObjectsV2Arguments, ObjectListingV2Domain, DeleteObjectArguments, DeleteObjectsArguments, DeleteObjectDomain } from '../../declarations';
import { Service, HttpConfig } from '../base';
declare class BucketService extends Service {
    private static instance;
    private constructor();
    static getInstance(config: HttpConfig): BucketService;
    getBaseAddress(): string;
    private getListAddress;
    private getExistsAddress;
    doesBucketExist(bucketName: string): Promise<AxiosHttpResult<boolean>>;
    listBuckets(): Promise<AxiosHttpResult<Array<BucketDomain>>>;
    createBucket(request: CreateBucketArguments): Promise<AxiosHttpResult<boolean>>;
    deleteBucket(request: DeleteBucketArguments): Promise<AxiosHttpResult<boolean>>;
}
declare class ObjectService extends Service {
    private static instance;
    private constructor();
    static getInstance(config: HttpConfig): ObjectService;
    getBaseAddress(): string;
    private getListAddress;
    private getListV2Address;
    private getMultiDeleteAddress;
    listObjects(request: ListObjectsArguments): Promise<AxiosHttpResult<ObjectListingDomain>>;
    listObjectsV2(request: ListObjectsV2Arguments): Promise<AxiosHttpResult<ObjectListingV2Domain>>;
    delete(request: DeleteObjectArguments): Promise<AxiosHttpResult<boolean>>;
    batchDelete(request: DeleteObjectsArguments): Promise<AxiosHttpResult<Array<DeleteObjectDomain>>>;
}
export { BucketService, ObjectService };
