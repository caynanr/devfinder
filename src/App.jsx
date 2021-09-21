import React, { useState } from "react";
import styled from "styled-components";

import { api } from "./api/api";
import { CardUser } from "./components/CardUser";

import { Search } from "./components/Search";
import { colors } from "./theme/dark-theme";

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueSky};
  color: white;

  @media (max-width: 700px) {
    background-color: ${colors.blueDark};
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 4rem 3.5rem auto;
  row-gap: 1rem;
  width: min(70%, 45rem);
  height: 40%;
  border-radius: 8px;
  padding: 0.5rem;

  & .header {
    height: 40px;
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.heading};
  }

  & .header h1 {
    font-size: 1.5rem;
  }

  & .themeBtn {
    background-color: transparent;
    border: none;
    color: ${colors.heading};
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 500;
    cursor: pointer;
    padding: 0.2rem;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

function App() {
  const [lightTheme, setLightTheme] = useState(false);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [successe, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange({ target }) {
    setSearch(target.value);
  }

  async function handleSearch() {
    try {
      setLoading(true);
      setError(false);
      const response = await api.get(`${search}`);
      if (response.status === 200) {
        setUser(response.data);
        setSuccess(true);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Body>
      <Container>
        <div className="header">
          <h1>{loading ? "buscando..." : "devfind"}</h1>
          <button
            className="themeBtn"
            onClick={() => {
              setLightTheme((oldState) => !oldState);
            }}
          >
            {!lightTheme ? "LIGHT" : "DARK"}
          </button>
        </div>
        <Search onChange={handleChange} value={search} onClick={handleSearch} />
        {error && (
          <p style={{ color: `${colors.blueSky}` }}>
            Usuário não encontrado...
          </p>
        )}
        {successe && <CardUser user={user} theme={lightTheme} />}
      </Container>
    </Body>
  );
}

export default App;
