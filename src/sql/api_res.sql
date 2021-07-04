CREATE DATABASE api_res;
GO

USE api_res;
GO

CREATE TABLE books(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    titulo  VARCHAR(100),
    autor   VARCHAR(100),
    edicion INT
)
GO