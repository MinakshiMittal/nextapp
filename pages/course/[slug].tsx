import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const CourseDescription = () => {
  const router = useRouter();

  const {
    query: { description, name, image },
  } = router;

  return (
    <>
      <h1 className="text-3xl font-semibold p-6">Course Details</h1>
      <div className="flex justify-center items-center p-4">
        <div className="flex flex-col w-1/2">
          <h2 className="text-xl font-medium">{name}</h2>
          <p className="m-2">{description}</p>
        </div>
        <div className="w-1/2">
          <Image
            className="w-full h-64"
            src={image as string}
            alt="course cover"
            height={100}
            width={100}
          />
        </div>
      </div>
    </>
  );
};

export default CourseDescription;
