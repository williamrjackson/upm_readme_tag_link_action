# Unity Package Readme Tagging Action

This GitHub Action tags a link in a Unity Package Readme file with a version number.

## Inputs

This action requires the following inputs:

- `path`: The path to the Readme file. By default, this is set to 'Readme.md'.
- `major`: The major version number to add as a tag.
- `minor`: The minor version number to add as a tag.
- `patch`: The patch version number to add as a tag.

## Usage

To use this action in your workflow, add the following step:

```yaml
- name: Tag Readme
  uses: your-github-username/your-repository@v1
  with:
    path: 'path/to/your/Readme.md'
    major: '1'
    minor: '0'
    patch: '0'