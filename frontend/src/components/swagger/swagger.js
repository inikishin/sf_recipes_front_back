import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import {url} from '../../services/handle-api'

export default function Swagger() {
    return (
        <SwaggerUI url={url + 'openapi?format=openapi-json'} />
    )
}
