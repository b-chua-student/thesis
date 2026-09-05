# Thesis 2026-2027

## Requirements

- Python 3.x
- Git

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install [pre-commmit](https://pre-commit.com/) and [commitizen](https://commitizen-tools.github.io/commitizen/).

1. Clone repository
```bash
git clone https://github.com/b-chua-student/thesis
```

2. Create and activate virtual environment
```bash
python -m venv /path/to/new/virtual/environment
```

| Platform | Shell      | Command to activate virtual environment  |
| -------- | ---------- | ----------------------------------------- |
| POSIX    | bash/zsh   | `source .venv/bin/activate`               |
| POSIX    | fish       | `source .venv/bin/activate.fish`          |
| POSIX    | csh/tcsh   | `source .venv/bin/activate.csh`           |
| Windows  | cmd.exe    | `.venv\Scripts\activate.bat`              |
| Windows  | PowerShell | `.venv\Scripts\Activate.ps1`              |

3. Install pre-commit framework

```bash
pip install pre-commit
```

4. Install pre-commit git hooks

```bash
pre-commit install --hook-type pre-commit --hook-type commit-msg --hook-type pre-push
```

5. Install commitizen

```bash
pip install commitizen
```

## Commit Conventions

Commits follow a custom conventional-commit style for thesis writing:

```
<type>(<scope>): <subject>
```

Types: `write`, `revise`, `cite`, `data`, `fix`, `structure`, `review`, `meta`, `remove`, `chore`.
Scope is typically the chapter or sub-chapter affected.

Example: `write(introduction): add background of the study`

## Contributing (for team members)

1. Branch off `master`, do not push directly to it.
2. Commit using `cz commit` (or `git commit` matching the schema above).
3. Open a pull request; CI must pass and at least one review is required before merge.
