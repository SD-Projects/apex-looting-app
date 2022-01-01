import React from 'react'

const ShieldBattery = ({consumables}) => {
    return (
        <div className="single-item-consumables-container">
            <h3 className="single-item-consumable" style={{background: consumables.colour}}>{consumables.name}</h3>
        </div>
    )
}

export default ShieldBattery
