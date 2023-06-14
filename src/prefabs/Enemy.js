class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, velocity) {
        super(scene, game.config.width + starWidth, Phaser.Math.Between(starHeight/2, game.config.height - starHeight/2), 'Enemy'); 
        
        this.parentScene = scene;               
        this.parentScene.add.existing(this);   
        this.parentScene.physics.add.existing(this);    
        this.setVelocityX(velocity);           
        this.setImmovable();                    
        this.newEnemy = true;                 
    }
    update() {
        if(this.newEnemy && this.x < centerX) {
            this.parentScene.addEnemy(this.parent, this.velocity);
            this.newEnemy = false;
        }

        if(this.x < -this.width) {
            this.destroy();
        }
    }
}
