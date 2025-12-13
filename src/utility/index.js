// !VA This sorts descending. To sort ascending, swap the a and b parameters
export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}