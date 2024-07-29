export function getNewUserIndex() {
  let i = 0;
  while (localStorage.getItem(`user-${i}`)) i++;
  return i;
}
