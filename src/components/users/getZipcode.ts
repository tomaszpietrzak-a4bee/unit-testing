export type User = {
  address: {
    zipcode: string;
  };
};

export const getZipcode = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!result.ok) {
      throw new Error(`Error: ${result.status}`);
    }

    const data: User = await result.json();
    return data.address.zipcode.replace("-", "");
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
    throw Error("Something went wrong");
  }
};
