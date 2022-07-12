import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setdisLike] = useState(0);
  return (

    <div>
      <IconButton color="primary" aria-label="like">

        <Badge badgeContent={like} color="success" onClick={() => setLike(like + 1)}>
          👍
        </Badge>
      </IconButton>

      <IconButton color="primary" aria-label="dislike">

        <Badge badgeContent={dislike} color="error" onClick={() => setdisLike(dislike + 1)}>
          👎
        </Badge>
      </IconButton>


    </div>
  );
}
