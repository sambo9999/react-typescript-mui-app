import useSWR from "swr";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function HandleError() {
  const URL: string = "https://jsonplaceholder.typicode.com/posts/1";
  const fetcher = async (url: any) => {
    const response = await fetch(url);
    const data = await response.json();
    if (response.status === 200) {
      return data;
    }
    throw new Error(data.error);
  };
  const { data, error } = useSWR(URL, fetcher);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  console.log("Data", data);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{data.id}</Button>
          <Button size="small">{data.userId}</Button>
        </CardActions>
      </Card>
      {data.completed ? <p>Completed</p> : <p>Not Completed</p>}
    </div>
  );
}

export default HandleError;
