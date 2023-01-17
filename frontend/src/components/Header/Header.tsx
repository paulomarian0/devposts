import { LogoutButton } from "./styles";
import { useRouter } from 'next/router'

export function Header(){
  const router = useRouter()

  return(
      <ul style={{display: 'flex', justifyContent: 'space-between', listStyleType: 'none'}}>
        <li>
          Logo
        </li>
        <LogoutButton onClick={() => router.push('/login')}>Logout</LogoutButton>
      </ul>
  )
}