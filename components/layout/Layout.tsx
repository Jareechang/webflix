import Nav from '../Nav'

import styled from 'styled-components'


const Container = styled.div`
    margin: ${props => props.theme.spacing(10, 6)};
`

export interface LayoutProps {
    children?: React.ReactNode
}

const Layout : React.FC<LayoutProps> = (
    { children = null }: LayoutProps
) => {
    return (
        <>
            <Nav />
            <Container>
                {children}
            </Container>
        </>
    )
}

export default Layout
