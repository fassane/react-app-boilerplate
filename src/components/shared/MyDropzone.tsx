import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFilePdf } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";
import ErrorMessage from "./ErrorMessage";
import { BiTrash } from "react-icons/bi";


function MyDropzone({
    setFiles,
    label,
    maxFiles = 4,
}: {
    setFiles?: any;
    label?: string;
    maxFiles?: number;
}) {
    const [maxFileError, setMaxFileError] = useState<string>("");
    const onDrop = useCallback((acceptedFiles: any, fileRejections: any[]) => {
        if (acceptedFiles) {
            setFiles((prevFiles: []) => {
                // console.log([...prevFiles, ...acceptedFiles]);
                return [...prevFiles, ...acceptedFiles];
            });

            console.log("acceptedFiles: ", acceptedFiles);
        }
        fileRejections.forEach((file: { errors: any[] }) => {
            file.errors.forEach((err: { code: string }) => {
                if (err.code === "too-many-files") {
                    setMaxFileError("Maximum 4 fichier");
                }
                if (err.code === "file-invalid-type") {
                    setMaxFileError("Types de fichiers non prises en charge");
                }
            });
        });
    }, []);

    const { getRootProps, getInputProps, fileRejections } = useDropzone({
        onDrop,
        maxFiles: maxFiles,
        maxSize: 109715200,
    });

    const fileRejectionItems = fileRejections.map(
        ({ errors }: any, index: number) => {
            return (
                <div key={index}>
                    <ul className="p-0">
                        {errors.map((e: any) => (
                            <li
                                key={e.code}
                                style={{ listStyle: "none" }}
                                className="text-danger"
                            >
                                {e.code === "file-too-large" &&
                                    `Le fichier ${index + 1} est trop grand`}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    );

    useEffect(() => {
        setTimeout(() => setMaxFileError(""), 3000);
    });
    return (
        <section className="dropzone files_dropzone">
            {!!label && (
                <label
                    htmlFor="files-to-upload"
                    className="form-label custom-form-label mb-2"
                >
                    {label}
                </label>
            )}
            <div
                {...getRootProps()}
                style={{
                    border: "2px dashed #A3AED0",
                    overflow: "hidden",
                    opacity: 1,
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    padding: "3rem 15px",
                    background: "transparent",
                    cursor: "pointer",
                }}
                className="dashed"
            >
                <input
                    {...getInputProps()}
                    type="file"
                    name="dropzone_files"
                    id="__dropzone_files"
                    accept="application/pdf"
                />
                <div className="text-center custom-form-label">
                    <div className="flex-c align-items-center mb-3 gap-3">
                        <MdUploadFile
                            style={{ color: "#12E1EB", fontSize: "28px" }}
                        />
                    </div>
                    <span className="blue-green-text">Click to upload</span>{" "}
                    <span>or drag and drop</span>
                </div>
            </div>
            {maxFileError && <ErrorMessage message={maxFileError} />}
            <div className="row pt-4">
                {/* {acceptedFileItems} */}
                {!maxFileError && fileRejectionItems}
            </div>
        </section>
    );
}

export default MyDropzone;

export const Render = ({
    files,
    deleteFile,
}: {
    files: File[] | [];
    deleteFile: (i: number, file: any) => void;
}) => {
    return (
        <>
            <div className="file-render-grid">
                <div className="row grid-row">
                    {files?.length
                        ? files.map((file: any, _id: number) => (
                              <div
                                  className="col-md-4 mb-3"
                                  key={`file_${_id}`}
                              >
                                  <div className="d-flex gap-3 align-items-center justify-content-content">
                                      <div className="d-flex gap-2 align-items-center">
                                          <span>
                                              <FaFilePdf
                                                  style={{
                                                      color: "#9203D7",
                                                      fontSize: "30px",
                                                  }}
                                              />
                                          </span>
                                          <div className="content-format-file">
                                              <p className="name-sdoc-format mb-1">
                                                  {!!file && (
                                                      <strong>
                                                          {file?.picture?.substr(
                                                              -15
                                                          )}
                                                      </strong>
                                                  )}
                                              </p>
                                              <p>...Mo</p>
                                          </div>
                                      </div>
                                      <button
                                          className="btn with-tooltip btn-action-icon-delete mt-2"
                                          title="Supprimer"
                                          data-tooltip-content="Supprimer"
                                          type="button"
                                          onClick={() => deleteFile(_id, file)}
                                      >
                                          <BiTrash color="#ff0000" size={22} />
                                      </button>
                                  </div>
                              </div>
                          ))
                        : ""}
                </div>
            </div>
        </>
    );
};
