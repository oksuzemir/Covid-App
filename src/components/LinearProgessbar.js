import React, { useEffect, useRef, useState } from "react";
import { Box, Fade, LinearProgress } from "@mui/material";

const LinearProgressbar = (props) => {
  const { loading } = props;
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const progressRef = useRef(() => {});

  useEffect(() => {
    if (loading) {
      progressRef.current = () => {
        if (progress > 100) {
          setProgress(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setProgress(progress + diff);
          setBuffer(progress + diff + diff2);
        }
      };
    }
  });

  useEffect(() => {
    let timer = null;
    if (loading) {
      timer = setInterval(() => {
        progressRef.current();
      }, 500);
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);
  return (
    <Fade unmountOnExit in={loading}>
      <Box
        sx={{
          overflow: "hidden",
        }}
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        position={"fixed"}
        alignItems={"center"}
        top={0}
        left={0}
        bottom={0}
        right={0}
        justifyContent={"center"}
        flexDirection={"column"}
        zIndex={99999999999}
      >
        <Box component={"p"} className="loading">
          Data fetching, please wait
        </Box>
        <Box sx={{ width: "34vh" }}>
          <LinearProgress
            sx={loaderStyle}
            variant="buffer"
            value={progress}
            valueBuffer={buffer}
          />
        </Box>
      </Box>
    </Fade>
  );
};

export default LinearProgressbar;

const loaderStyle = {
  backgroundColor: "#fff",
  "&>.MuiLinearProgress-dashed": {
    backgroundImage:
      "radial-gradient(rgb(167, 202, 237) 0%, rgb(167, 202, 237) 16%, transparent 42%)",
  },
  "&>.MuiLinearProgress-bar1Buffer": {
    backgroundColor: "#fff",
  },
  "&>.MuiLinearProgress-bar2Buffer": {
    backgroundColor: "rgb(167, 202, 237)",
  },
};
