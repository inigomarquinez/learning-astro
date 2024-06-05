import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState('');
  const search = (e) => setValue(e.target.value);
  const url = "/results/";

  return (
    <div>
      <center>
        <form action={url + value} method="POST">
          <input
            type="search"
            className="form-control mt-5 p-3"
            placeholder="Search"
            value={value}
            onChange={search} />
        </form>
      </center>
    </div>
  )
}