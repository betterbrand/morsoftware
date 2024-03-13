import React, { FormHTMLAttributes, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PANELS } from '../constants';
import { FormValues } from '../types';

type SignupFormProps = {
  setSelectedPanel: React.Dispatch<React.SetStateAction<string>>;
  setSignupFormFields: React.Dispatch<React.SetStateAction<FormValues>>;
  signupFormFields: FormValues;
};

const SignupForm = ({
  setSelectedPanel,
  setSignupFormFields,
  signupFormFields
}: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    setSelectedPanel(PANELS.GITHUB);
    setSignupFormFields((prevFormData) => ({ ...prevFormData, ...data }));
  };

  useEffect(() => {
    reset(signupFormFields);
  }, [signupFormFields, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" grow">
      <div className="mb-6 text-xl font-semibold">Register as a Developer</div>
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Username
        </label>
        <input
          id="name"
          placeholder="Enter your username"
          className={`input ${
            errors.username ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('username', {
            required: 'username is required',
            minLength: {
              value: 1,
              message: 'username must be at least 1 characters long'
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/i,
              message: 'username must not contain special characters'
            }
          })}
        />
        {errors.username && (
          <p className="mt-2 text-sm text-red-600">{errors.username.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className={`input ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Email must include an @ symbol'
            }
          })}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="walletAddress"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Wallet Address
        </label>
        <input
          id="walletAddress"
          placeholder="Enter your eth wallet address"
          className={`input ${
            errors.walletAddress ? 'border-red-500' : 'border-gray-300'
          } block w-full px-4 py-2 text-sm border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          {...register('walletAddress', {
            required: 'Wallet address is required',
            validate: (value) =>
              value.startsWith('0x') && value.length === 42
                ? true
                : 'Wallet address must start with 0x and be 42 characters long'
          })}
        />
        {errors.walletAddress && (
          <p className="mt-2 text-sm text-red-600">
            {errors.walletAddress.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="tosAccepted"
            className={`checkbox ${
              errors.tosAccepted ? 'border-red-500' : 'border-gray-300'
            } h-4 w-4 text-blue-600 border rounded focus:ring-blue-500`}
            {...register('tosAccepted', {
              required: 'You must accept the Terms of Service'
            })}
          />
          <label
            htmlFor="tosAccepted"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I accept the Terms of Service
          </label>
        </div>
        {errors.tosAccepted && (
          <p className="mt-2 text-sm text-red-600">
            {errors.tosAccepted.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Continue
      </button>
    </form>
  );
};

export default SignupForm;
