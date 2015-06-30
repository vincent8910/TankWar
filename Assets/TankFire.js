#pragma strict
var FirePoint:Transform;  
var Bullet:Rigidbody;

function Start () {

}

function Update () {
	var Fire:Vector3 = FirePoint.position;
	if(Input.GetMouseButtonDown(0))  
    {  
        	var clone : Rigidbody;  
        	clone = Instantiate(Bullet, FirePoint.position, FirePoint.rotation);  
        	clone.velocity = transform.TransformDirection(Fire.right*300);
    }
}