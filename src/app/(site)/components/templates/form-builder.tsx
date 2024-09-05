'use client'
import React, { useState } from 'react';
import { submitForm } from './_formActions'
import Styles from "./form-builder.module.css"
import ContentEditor from '../util/content-editor';
import { FaSpinner } from 'react-icons/fa';

interface FormField {
  name: string;
  label: string;
  type: any;
  _key: string;
  radioValue: string[]
  selectValue: string[]
  checkBoxValue: string[]
  required: boolean
  stacked: boolean
}

interface FormSchema {
  subject: string;
  fields: FormField[];
  emailCc: string;
  emailBcc: string;
  sendTo: string;
  sendFrom: string;
  redirectTo: string;
  buttonLabel: string;
  buttonBackgroundColor: any;
  buttonTextColor: any;
  formDisclaimer: any;
  spreadsheetId?: string;
  sheetName?: string;
}

interface FormBuilderProps {
  formSchema: FormSchema;
}

export default function FormBuilder({ formSchema }: FormBuilderProps) {

  const [sending, setSending] = useState('Idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ensure preventDefault is correctly invoked here
    setSending('Sending');

    const formData = new FormData(e.currentTarget);

    try {
      await submitForm(formData, formSchema?.spreadsheetId, formSchema?.sheetName);
      setSending('Sent');
    } catch (error) {
      setSending('Error');
    }
  };

  return (
    <div className="py-2">
      <form onSubmit={handleSubmit}> {/* Ensure onSubmit is bound to handleSubmit */}
        <label className="hidden" htmlFor="name-honey" />
        <input className="hidden" type="text" name="name-honey" />
        <input className="hidden" type="hidden" name="bcc" value={formSchema?.emailBcc} />
        <input className="hidden" type="hidden" name="cc" value={formSchema?.emailCc} />
        <input className="hidden" type="hidden" name="sendFrom" value={formSchema?.sendFrom ? formSchema.sendFrom : 'forms@hungryramwebdesign.com'} />
        <input className="hidden" type="hidden" name="sendTo" value={formSchema?.sendTo} />
        <input className="hidden" type="hidden" name="subject" value={formSchema?.subject} />
        <input className="hidden" type="hidden" name="redirectTo" value={formSchema?.redirectTo} />
        {formSchema?.fields && (
          <>
            {formSchema.fields.map((field, i) => {
              return (
                <div key={field._key} className="grid grid-cols-4 mb-2 items-center">
                  <label htmlFor={field.label.replace(/ /g, '') + i} className={`${Styles.formLabel} col-span-1`}>
                    {field.label}
                    {field.required && <span>*</span>}
                  </label>
                  {field.type === 'text' && (
                    <input
                      type="text"
                      name={field.label}
                      className={Styles.formDefaultInput}
                      id={field.label.replace(/ /g, '') + i}
                      required={field.required ? true : undefined}
                    />
                  )}
                  {field.type === 'file' && (
                    <input
                      type="file"
                      name={field.label}
                      className={Styles.formDefaultInput}
                      id={field.label.replace(/ /g, '') + i}
                      required={field.required ? true : undefined}
                    />
                  )}
                  {field.type === 'email' && (
                    <input
                      type="email"
                      name={field.label}
                      className={Styles.formDefaultInput}
                      id={field.label.replace(/ /g, '') + i}
                      required={field.required ? true : undefined}
                    />
                  )}
                  {field.type === 'phone' && (
                    <input
                      type="tel"
                      name={field.label}
                      className={Styles.formDefaultInput}
                      id={field.label.replace(/ /g, '') + i}
                      required={field.required ? true : undefined}
                    />
                  )}
                  {field.type === 'radio' && (
                    <div className={`gap-x-6 mt-2 ${field?.stacked ? '' : 'flex items-center'}`}>
                      {field?.radioValue?.map((node, i) => {
                        return (
                          <div className="flex items-center gap-2 my-1" key={i}>
                            <input
                              type="radio"
                              name={field.label}
                              id={node.replace(/^[^A-Za-z0-9]+/g, '').replace(/[^A-Za-z0-9_\-:.]/g, '') + i}
                              className="h-4 w-4 rounded border-gray-300"
                              required={field.required ? true : undefined}
                              value={node}
                            />
                            <label htmlFor={node.replace(/^[^A-Za-z0-9]+/g, '').replace(/[^A-Za-z0-9_\-:.]/g, '') + i} className={Styles.formInputList}>
                              {node}
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {field.type === 'checkbox' && (
                    <div className={`gap-x-6 mt-2 ${field?.stacked ? '' : 'flex items-center'}`}>
                      {field?.checkBoxValue?.map((node, i) => {
                        return (
                          <div className="flex items-center gap-2 my-1" key={i}>
                            <input
                              type="checkbox"
                              name={field.label}
                              id={node.replace(/^[^A-Za-z0-9]+/g, '').replace(/[^A-Za-z0-9_\-:.]/g, '') + i}
                              className="h-4 w-4 rounded border-gray-300"
                              value={node}
                              required={field.required ? true : undefined}
                            />
                            <label htmlFor={node.replace(/^[^A-Za-z0-9]+/g, '').replace(/[^A-Za-z0-9_\-:.]/g, '') + i} className={Styles.formInputList}>
                              {node}
                            </label>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  {field.type === 'select' && (
                    <div className="col-span-3 grid">
                      <select
                        id={field.label.replace(/ /g, '') + i}
                        name={field.label}
                        required={field.required ? true : undefined}
                      >
                        {field?.selectValue?.map((node, i) => {
                          return (
                            <option value={node} key={i}>
                              {node}
                            </option>
                          )
                        })}
                      </select>
                    </div>
                  )}
                  {field.type === 'textarea' && (
                    <textarea
                      name={field.label}
                      className={Styles.textarea}
                      rows={3}
                      id={field.label.replace(/ /g, '') + i}
                      required={field.required ? true : undefined}
                    />
                  )}
                </div>
              );
            })}
          </>
        )}
        {formSchema?.formDisclaimer &&
          <div className="text-xs">
            <ContentEditor
              content={formSchema?.formDisclaimer}
            />
          </div>
        }
        <div className="grid grid-cols-4">
          <div className="col-span-1">
            {/* LEAVE EMPTY */}
          </div>
          <button type="submit" className="primary-button" style={{
              backgroundColor: formSchema?.buttonBackgroundColor?.hex,
              color: formSchema?.buttonTextColor?.hex
            }}>
              {sending === 'Idle' ?
                `${formSchema?.buttonLabel ?? 'SUBMIT'}`
                : sending === 'Sending' ?
                  <FaSpinner className="animate-spin mx-auto text-xl" />
                  : sending === 'Sent' ?
                    'Sent'
                    : 'Error'
              }            </button>
        </div>
      </form>
    </div>
  );
}