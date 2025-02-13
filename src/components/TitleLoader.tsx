import React from 'react';
import styled from 'styled-components';

const TitleLoader = () => {
    return (
        <StyledWrapper>
            <div className="loader">
                <span className="loader-text">The Dev</span>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    overflow: hidden;
    border-right: 3px solid;
    width: 0px;
    animation: typewriter 2s steps(7)  infinite alternate , blink 0.5s steps(7) infinite;
  }

  .loader-text {
    font-size: 26px;
    font-weight: 700;
    white-space: nowrap;
    background: linear-gradient(to right,#2f00ff, #155799);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @keyframes typewriter {
    0% {
      width: 0px;
    }

    100% {
      width: 131px;
    }
  }

  @keyframes blink {
    0% {
      border-right-color: rgba(255,255,255,.75);
      ;
    }

    100% {
      border-right-color: transparent;
    }
  }`;

export default TitleLoader;
