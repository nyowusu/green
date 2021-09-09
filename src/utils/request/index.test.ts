import requestRetry, { ResponseError } from './index';

describe('request', () => {
  it('uses default headers', async () => {
    const mockFetch: any = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: () => '',
        },
        ok: true,
        status: 200,
        json: () => Promise.resolve(),
      }),
    );

    await requestRetry('some/url', undefined, mockFetch);

    expect(mockFetch).toHaveBeenCalledWith(
      'some/url',
      expect.objectContaining({
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-context': 'mobile',
        },
        method: 'GET',
      }),
    );
  });

  it('overrides default options if options passed in', async () => {
    const mockFetch: any = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: () => '',
        },
        ok: true,
        status: 200,
        json: () => Promise.resolve(),
      }),
    );

    await requestRetry(
      'some/url',
      {
        headers: {
          Accept: 'application/not-json',
        },
        method: 'POST',
      },
      mockFetch,
    );

    expect(mockFetch).toHaveBeenCalledWith(
      'some/url',
      expect.objectContaining({
        headers: {
          Accept: 'application/not-json',
          'Content-Type': 'application/json',
          'x-authentication-context': 'mobile',
        },
        method: 'POST',
      }),
    );
  });

  it('returns JSON if the response is valid JSON and correct Content-Type', async () => {
    const mockFetch: any = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: () => 'application/json',
        },
        ok: true,
        status: 200,
        json: () => Promise.resolve({ test: 1 }),
      }),
    );

    const response = await requestRetry('some/url', undefined, mockFetch);
    expect(response).toEqual({ test: 1 });
  });

  it('does not return JSON if the response does not have the correct Content-Type', async () => {
    const mockJson = jest.fn();
    const mockFetch: any = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: () => 'text/html',
        },
        ok: true,
        status: 200,
        json: mockJson,
      }),
    );

    const response = await requestRetry('some/url', undefined, mockFetch);
    expect(response).toBeNull();
    expect(mockJson).not.toHaveBeenCalled();
  });

  it('throws if correct Content-Type but invalid JSON in body', async () => {
    const error = new Error('error');
    const mockJson = jest.fn(() => Promise.reject(error));
    const mockFetch: any = jest.fn(() =>
      Promise.resolve({
        headers: {
          get: () => 'application/json',
        },
        ok: true,
        status: 200,
        json: mockJson,
      }),
    );
    try {
      await requestRetry('some/url', undefined, mockFetch);
    } catch (err) {
      expect(err).toBe(error);
    }
  });
});

describe('ResponseError', () => {
  const responseError = {
    message: 'Oh no!',
    status: 500,
  };

  it('includes error response as properties', () => {
    const error = new ResponseError(responseError);
    expect(error.message).toEqual('Oh no!');
    expect(error.status).toEqual(500);
  });
});
