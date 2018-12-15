function doubleSay(str: string): string {
  return str + ", " + str;
}

function capitalize(str: string): string {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim(str: string): string {
  return str + '!';
}

"hello"
  |> doubleSay
  |> capitalize
  |> exclaim
  |> console.log;
