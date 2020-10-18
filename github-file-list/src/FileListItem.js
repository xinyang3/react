import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';

function FileIcon({ file }) {
  let icon = file.type === 'folder' ? 'fa-folder' : 'fa-file-text-o';
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}></i>
    </td>
  );
}
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};

function getFileName(file) {
  return [
    <FileIcon file={file} key={0} />,
    <td className="file-name" key={1}>
      {file.name}
    </td>,
  ];
}

const CommitMessage = ({ commit }) => (
  <td className="commitmessage">{commit.message}</td>
);
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};

const FileListItem = ({ file }) => (
  <tr className="filelist-item">
    {/* <FileIcon file={file} />
    <td className="file-name"> {file.name} </td> */}
    {getFileName(file)}
    <CommitMessage commit={file.latestCommit} />
    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};

export default FileListItem;
