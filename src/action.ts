'use server';


interface ApiProps extends RequestInit {
  url: string;
  params?: string;
}
interface MutatorProps<T> extends ApiProps {
  data: T;
}

// get api value from env
const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

//  parse json
export const parseJson = (value: string) => {
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

/**
 * Fetch data from the API
 * @param {Object} obj - Object containing the URL
 * @returns {Promise<any>} The data returned from the API response
 */
export async function Get({ url, params }: ApiProps) {
  try {
    const endpointURL = params
      ? `${apiUrl}${url}?${params}`
      : `${apiUrl}${url}`;
    const res = await fetch(endpointURL, {
      method: 'GET',
    });
    // if (res.status === 401) {
    //   await logout();
    //   throw new Error('Unauthorized');
    // }

    return await res.json();
  } catch (error) {
    if (error instanceof Error)
      throw new Error(error.message, {
        cause: error.cause,
      });
    throw new Error('An error occurred.');
  }
}

/**

* Post data to the API 
* Post and update url : /store   --> for update needs to pass id in data
* @param {Object} obj - Object containing the URL and data(id for delete)
* @returns {Promise<any>} The data returned from the API response
*/

export async function Post<PayloadType, ResponseType>({
  url,
  data,
}: MutatorProps<PayloadType>): Promise<ResponseType> {
  try {
    const res = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    // if (res.status === 401) {
    //   await logout();
    //   throw new Error('Unauthorized');
    // }
    return (await res.json()) as ResponseType;
  } catch (error: any) {
    if (error instanceof Error)
      throw new Error(error.message, { cause: error.cause });
    throw new Error('An error occurred.');
  }
}

/**
 * Delete data
 * @param {string} url - The URL to send the request to
 * @param {string | number} id - The ID of the item to delete
 * @returns {Promise<any>} The data returned from the API response
 */
export async function Delete<ResponseType>({
  url,
  id,
}: {
  url?: string;
  id: number | string;
}): Promise<ResponseType> {
  try {
    const res = await fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: JSON.stringify({ id }),
    });
    // if (res.status === 401) {
    //   await logout();
    //   throw new Error('Unauthorized');
    // }
    return (await res.json()) as ResponseType;
  } catch (error: any) {
    throw {
      status: error.status || 500,
      message: error.message || 'An error occurred',
    };
  }
}
