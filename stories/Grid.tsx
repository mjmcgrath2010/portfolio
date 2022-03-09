import React from "react";
import Grid from "../components/Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {},
  parameters: {},
};

export const DefaultStory = ({ ...rest }) => (
  <Grid {...rest}>
    <Grid.Item>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
    <Grid.Item>5</Grid.Item>
    <Grid.Item>6</Grid.Item>
    <Grid.Item>7</Grid.Item>
    <Grid.Item>8</Grid.Item>
    <Grid.Item>9</Grid.Item>
    <Grid.Item>10</Grid.Item>
    <Grid.Item>11</Grid.Item>
    <Grid.Item>12</Grid.Item>
  </Grid>
);

DefaultStory.args = {};

DefaultStory.storyName = "Grid - Default Story";
