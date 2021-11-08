import React from 'react'
import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyleDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})


export default function Section({ children, delay = 0 }) {
    return (
        <StyleDiv
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            trnasition={{ duration: 0.8, delay }}
            md={6}>
                {children}
            </StyleDiv>
    )
}
