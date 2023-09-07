interface ApiManager {
  sendApi<Result>(
    url: string,
    callForm?: {
      header: unknown;
      body: unknown;
    }
  ): Promise<Result>;
}

export default ApiManager;
