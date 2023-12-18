CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    img_url VARCHAR(255) NULL,
    deployment_url  VARCHAR(255) NULL,
    github_url  VARCHAR(255) NULL,
    starred BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    inner_svg TEXT NOT NULL
);

CREATE TABLE project_tags (
    project_id INTEGER REFERENCES projects(id),
    tag_id INTEGER REFERENCES tags(id),
    starred BOOLEAN NOT NULL DEFAULT FALSE
);