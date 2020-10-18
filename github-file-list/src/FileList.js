import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';

const FileList = ({ files }) => (
  <table className="filelist">
    <tbody>
      {files.map((file) => {
        return (
          // <tr className="file-list-item" key={file.id}>
          //     <td className="file-name">{file.name}</td>
          // </tr>
          <FileListItem file={file} key={file.id} />
        );
      })}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array,
};

export default FileList;
