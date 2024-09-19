import { gql } from '@apollo/client'

export const GET_TRAILS = gql`
    query GetAllOpenTrails {
        allTrails {
            id
            name
            difficulty
            groomed
            accessedByLifts {
                id
                name
                capacity
                elevationGain
            }
        }
    }
`

export const SET_TRAIL_STATUS = gql`
    mutation SetTrailStatus($id: ID!, $status: TrailStatus!) {
        setTrailStatus(id: $id, status: $status) {
            id
            name
        }
    }
`
