import { FC } from 'react'

const AvengerList: FC<{ data: { name: string }[] }> = ({ data }) => (
  <ul>
    {data.map(({ name }) => <li>{name}</li>)}
  </ul>
)

export default AvengerList