import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzonecomp.css';
import { Plus } from 'react-feather';
import { Icon } from '@chakra-ui/react';

function Dropzonecomp({ dropzoneRef, setImage }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setImage(acceptedFiles[0].path);
    },
    [setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 3,
    accept: 'image/*,.pdf',
    onDrop,
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input
          name="image"
          {...getInputProps()}
          ref={dropzoneRef}
          className="dropzone"
        />
        <Icon my="auto" as={Plus} />
      </div>
    </section>
  );
}
export default Dropzonecomp;
