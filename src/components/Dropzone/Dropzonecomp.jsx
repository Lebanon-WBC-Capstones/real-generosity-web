import React from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzonecomp.css';
import { Plus } from 'react-feather';
import { Icon } from '@chakra-ui/react';
function Dropzonecomp() {
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 3,
    accept: 'image/*,.pdf',
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} className="dropzone" />

        <Icon my="auto" as={Plus} />
      </div>
    </section>
  );
}
export default Dropzonecomp;
