export const login = user => (
  $.ajax({
    method: 'post',
    url: '/api/session',
    data: {user: user}
  })
)

export const logout = () => (
  $.ajax({
    method: 'delete',
    url: '/api/session'
  })
)

export const signup = user => (
  $.ajax({
    method: 'post',
    url: 'api/users',
    data: {user: user}
  })
)