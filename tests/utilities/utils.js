export const siteCredentials = {
  email: 'sharontmontenegro+test@gmail.com',
  password: 'NotObvious123!',
  username: 'HiIAmATest'
}

export const randomRepoName = () => {
  var repoName = ''
  var length = 10
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i <= length; i++) {
    repoName += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return repoName
}

export const ReadMeInfo = {
  comment: `Repellat quis quaerat eligendi rerum error totam dolore. Qui dolor esse aut architecto enim voluptas. Quam voluptatibus laudantium numquam voluptas rerum sunt. Qui perferendis sed distinctio.Repellat quis quaerat eligendi rerum error totam dolore. Qui dolor esse aut architecto enim voluptas. Quam voluptatibus laudantium numquam voluptas rerum sunt. Qui perferendis sed distinctio.Repellat quis quaerat eligendi rerum error totam dolore. Qui dolor esse aut architecto enim voluptas. Quam voluptatibus laudantium numquam voluptas rerum sunt. Qui perferendis sed distinctio.`
}
