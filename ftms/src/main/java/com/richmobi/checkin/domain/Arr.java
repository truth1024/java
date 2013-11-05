package com.richmobi.checkin.domain;

public class Arr extends AbstractDomain {

	private static final long serialVersionUID = 7748632517069028328L;
	
	private int value;
	private String name;
	
	public Arr(){}
	
	public Arr(int value,String name){
		this.value = value;
		this.name = name;
	}
	
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
