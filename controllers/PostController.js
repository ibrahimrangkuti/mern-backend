import Post from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const response = await Post.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getPostById = async (req, res) => {
  try {
    const response = await Post.findOne({ where: { id: req.params.id } });
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  try {
    await Post.create(req.body);
    res.status(201).json({ msg: "Post Created Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  try {
    await Post.update(req.body, { where: { id: req.params.id } });
    res.status(200).json({ msg: "Post Updated Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json({ msg: "Post Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};
