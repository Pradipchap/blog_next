"use client";
import React from "react";
import Form from "@/components/Form";

const Create = () => {
  const createBlog = async (data) => {
    console.log(data);
    try {
        //upload to mongodb database
        
    } catch (error) {
        
    }
  };

  return <Form createBlog={createBlog} />;
};

export default Create;
